/*
Your job is to return the list of tags that every selected (selected is true) candidate shares. 
This means that a tag is only included in the result if every single selected candidate has that tag. 
You do not need to worry about the order of tags in your output.
*/

const Candidates = [
    {
     id: '5141414',
     name: 'Bob',
     tags: ['tag1', 'tag2', 'tag3', 'tag4'],
     selected: true,
   },
   {
     id: '9841414',
     name: 'Joe',
     tags: ['tag1', 'tag2', 'tag5'],
     selected: true,
   },
   {
     id: '2341414',
     name: 'Lisa',
     tags: ['tag1', 'tag2', 'tag6'],
     selected: true,
   },
     {
     id: '23414235423514',
     name: 'Lisa Jones',
     tags: ['tag1', 'tag2', 'tag634'],
     selected: true,
   },
   {
     id: '231421414',
     name: 'Noo',
     tags: ['aaa', 'bbbb', 'cccc'],
     selected: false,
   }
 ]
 
 
 function sharedTags(candidates) {
   /*
    Just to explain what I did a bit. 
    First I filtered out candidates that weren't selected and counted how many selected candidates there are
    Then I built a list of all tags from the selected candidates and a list of unique tags
    Created an object for each unique tag to keep count of how many times it occurs
    Then just returned the tags that occurred >= the amount of selected candidates
    */
   let selectedCandidatesTags = [];
   let candidateCount = 0;
   let uniqueValues;
   let tagsCount = [];
   let results = [];
   
   //a helper to grab the unique tags
   const getUnique = (value, i, self) => { 
     return self.indexOf(value) === i;
   };
   
   //iterate through candiates and create an array of tags from all selected === true candidates
   candidates.forEach( candidate => {
       if(candidate.selected) {
           selectedCandidatesTags.push(candidate.tags);
           candidateCount += 1;
       }
   });
   //Clean up selected can tags so it's an array of tags and not arr of arrays of tags
   selectedCandidatesTags = [].concat.apply([], selectedCandidatesTags);
   //Creating an array of unique tags to compare against
   uniqueValues = selectedCandidatesTags.filter(getUnique);
   //Building an object to track how many times each tag occurs
   uniqueValues.forEach(value => tagsCount.push({tag: value, count: 0 }));
   //counting how many times each tag occurs
   selectedCandidatesTags.forEach( tag => {
     uniqueValues.forEach( item => {
       if(item === tag) {
         let index = tagsCount.findIndex(i => i.tag === tag)
         tagsCount[index].count += 1
       }
     })
   });
   // Adding the final results to be returned. If the tag occurs >= the amount of candidates
   tagsCount.forEach( item => {
     item.count >= candidateCount ? results.push(item.tag) : null
   })
   console.log(results);
   return results;
 }
 
 sharedTags(Candidates);