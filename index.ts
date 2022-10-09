export type CardType = [string, number];

const allType = [
  's','b','h','m'
]


export const combineFunction = (
  inputOrderedNumberListList: number[][],
  cardInputList:  CardType[]
) => {

}

export interface StraightFlushCardMeter {
  inputOrderList: number[][];
  carInputSetList: CardType[];
  result: CardType[][];
}

export const recursiveSearchAllStraightFlushCard = (
  input: StraightFlushCardMeter,
): CardType[][] => {
  if (input.inputOrderList.length === 0) {
    return input.result
  }
  const newInputOrderList = [...input.inputOrderList];
  const newInput = [...input.carInputSetList];
  const newResult = [...input.result];

  const searchResult = searchStraightFlushCard(newInputOrderList[0], newInput)

  if (searchResult) {
    newResult.push(searchResult);
    searchResult.forEach((deleteItem) => {
      const deleteIndex = newInput.findIndex((item) => {
        return item[0] === deleteItem[0] && item[1] === deleteItem[1];
      });
      newInput.splice(deleteIndex, 1)
    })
  }
  newInputOrderList.splice(0, 1)

  const nextLevelInput: StraightFlushCardMeter = {
    inputOrderList: newInputOrderList,
    carInputSetList: newInput,
    result :newResult,
  }
   
  return recursiveSearchAllStraightFlushCard(nextLevelInput);
}

export const searchStraightFlushCard = (
  inputOrderedNumberList: number[],
  cardInputList: CardType[]
): (CardType[] | undefined) => {
  let currentCardType = ''
  const resultCardList: CardType[] = [];
  inputOrderedNumberList.forEach((inputOrderedNumber) => {
    if (currentCardType === '') {
      allType.forEach((type) => {
        if (currentCardType !== '') return
        const getMatch = cardInputList.find((cardInput) => {
          return cardInput[1] === inputOrderedNumber && cardInput[0] === type;
        })
        if (!getMatch) return;
        currentCardType = type;
      })
    }
    
    const card: CardType = [currentCardType, inputOrderedNumber];
    if (resultCardList.length === 0) {
      resultCardList.push(card)
      return
    }
    const foundCard = cardInputList.find((cardInput) => {
      return cardInput[0] === currentCardType && cardInput[1] === inputOrderedNumber;
    })
    if (!foundCard) return
    resultCardList.push(card)
  })
  if (resultCardList.length !== inputOrderedNumberList.length) return;
  return resultCardList;
}
