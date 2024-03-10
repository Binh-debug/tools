import {
  keyword1,
  keyword2,
  keyword3,
  keyword4,
  keyword5,
  keyword6,
  keyword7,
  keyword8,
  keyword9,
  keyword10,
  keyword11,
} from '../../const/keyword';

const keywords = [
  keyword1,
  keyword2,
  keyword3,
  keyword4,
  keyword5,
  keyword6,
  keyword7,
  keyword8,
  keyword9,
  keyword10,
  keyword11,
];

const groupFilter = (keywords: string[][]) => {
  let groupNumber = 0;
  let groupID = `group_${groupNumber}`;

  const cloneKeywords = JSON.parse(JSON.stringify(keywords));

  const indexOfMatchKeys: number[] = [];

  const keyword_1 = [...cloneKeywords[0]];

  const groupedKeywords: { [groupId: string]: string[][] } = {};

  for (let i = 0; i < cloneKeywords.length; i++) {
    const keyword = cloneKeywords[i];
    {
      const count = keyword_1.reduce((initialValue, title) => {
        return initialValue + Number(keyword.includes(title));
      }, 0);

      if (count > 5) {
        // const group = [keyword_1, keyword];
        groupedKeywords[groupID].push(keyword);
        const indexOfKeyword = cloneKeywords.indexOf(keyword);
        indexOfMatchKeys.push(indexOfKeyword);
        // keywords.splice(indexOfKeyword, 1);
      } else {
        groupedKeywords[groupID] = [keyword_1];
        groupNumber++;
        cloneKeywords.splice(0, 1);
      }
    }
  }
  // cloneKeywords.filter((keyowrd)=>{})
  // groupedKeywords[groupID]
  if (cloneKeywords.length < 2) return;
  groupFilter(keywords);
};

groupFilter(keywords);

export default groupFilter;
