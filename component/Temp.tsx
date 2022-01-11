import WordTagSentence from './WordTagSentence';

const TempTest = () => {
  return (
    <>
      <WordTagSentence
        sentence="늙은이들은 젠더이슈에 대해서 그냥 입닥치고 있어ㅋㅋ 지들이 다 망쳐놓고선"
        offensive={{ startIndex: 6, endIndex: 39 }}
        target={{ startIndex: 0, endIndex: 4 }}
      />
      <br />
      <WordTagSentence
        sentence="우리나라는 시민단체들이 정치무리들의 가면이자 수단이라 그렇지. 썩은 시민사회"
        offensive={{ startIndex: 35, endIndex: 41 }}
        target={{ startIndex: 6, endIndex: 11 }}
      />
      <br />
      <WordTagSentence
        sentence="간신들의짐덩어리당!!!나라의온갖부정식품들이혼합되어있는짐덩어리들!!"
        offensive={{ startIndex: 0, endIndex: 35 }}
        target={{ startIndex: 0, endIndex: 9 }}
      />
    </>
  );
};

export default TempTest;
