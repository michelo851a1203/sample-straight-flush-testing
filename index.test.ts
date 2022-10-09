import { describe, test, expect } from "vitest";
import { 
  combineFunction,
  recursiveSearchAllStraightFlushCard,
  searchStraightFlushCard,
  StraightFlushCardMeter
} from ".";
import type { CardType } from '.'

describe('card',() => {
  test('test sample', () => {
    //
    // const testCardInput: CardType[] = [
    //   ["s",6],
    //   ["s",5],
    //   ["s",4],
    //   ["s",3],
    //   ["s",2],
    //  
    //   ["b",6],
    //   ["b",5],
    //   ["b",4],
    //   ["b",3],
    //   ["b",2],
    //  
    //   ["s",10],
    //   ["s",11],
    //   ["s",12]
    // ];
    //
    // const testListInput = [[6,5,4,3,2],[6,5,4,3,2],[10 ,11, 12]];
    // combineFunction(testListInput, testCardInput)
    //
    // expect(true).toBe(true)
  })

  test('test recursiveSearchAllStraightFlushCard', () => {

    const testCardInput: CardType[] = [
      ["s",6],
      ["s",5],
      ["s",4],
      ["s",3],
      ["s",2],
     
      ["b",6],
      ["b",5],
      ["b",4],
      ["b",3],
      ["b",2],
     
      ["s",10],
      ["s",11],
      ["s",12]
    ];
    
    const testListInput = [[6,5,4,3,2],[6,5,4,3,2],[10 ,11, 12]];

    const sampleInput: StraightFlushCardMeter = {
      inputOrderList: testListInput,
      carInputSetList: testCardInput,
      result: [],
    }

    const result = recursiveSearchAllStraightFlushCard(sampleInput)
    const expectedResult: CardType[][] = [
      [
        ["s",6],
        ["s",5],
        ["s",4],
        ["s",3],
        ["s",2],
      ],
      [ 
        ["b",6],
        ["b",5],
        ["b",4],
        ["b",3],
        ["b",2],
      ],
      [
        ["s",10],
        ["s",11],
        ["s",12]
      ]
    ]
    expect(result).toStrictEqual(expectedResult)
  })

  test('test single card combine', () => {
    const testCardInput: CardType[] = [
      ["s",6],
      ["s",5],
      ["s",4],
      ["s",3],
      ["s",2],
      
      ["b",6],
      ["b",5],
      ["b",4],
      ["b",3],
      ["b",2],
      
      ["s",10],
      ["s",11],
      ["s",12]
    ];

    const testListInput = [6,5,4,3,2];

    const result = searchStraightFlushCard(testListInput, testCardInput)
    const expectedResult = [
      ["s",6],
      ["s",5],
      ["s",4],
      ["s",3],
      ["s",2],
    ]

    expect(result).toStrictEqual(expectedResult);
  })
})

