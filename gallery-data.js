// Replace the files and descriptions with your own photographs.
const gallery = Array.from({length:12},(_,i)=>({
  src:`assets/images/dijak${i<6?'A':'B'}/photo${i%6+1}.jpg`,
  title:`Photo ${i%6+1}`,
  author:`Student ${i<6?'A':'B'}`,
  category:['challenge','solutions','behind'][i%3],
  description:'Replace this with a description of your original photograph.'
}));
