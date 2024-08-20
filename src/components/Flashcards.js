import { FlashcardArray } from "react-quizlet-flashcard";
import React from "react";

function Flashcards({ cards }) {
  return (
    <div>
      <FlashcardArray
        cards={cards}
        frontContentStyle={{
          backgroundColor: "lightgoldenrodyellow",
          color: "black",
        }}
        backContentStyle={{
          backgroundColor: "turquoise",
        }}
      />
    </div>
  );
}

export default Flashcards;
