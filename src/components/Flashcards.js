import { FlashcardArray } from "react-quizlet-flashcard";
import React from "react";

function Flashcards({ cards }) {
  return (
    <div>
      <FlashcardArray
        cards={cards}
        frontCardStyle={{
          backgroundColor: "#2c3e50",  // Darker color for the front side
          borderRadius: "8px",         // Rounded corners
          height: "22vw",              // Responsive height
          width: "31vw",                // Fixed width
        }}
        frontContentStyle={{
          backgroundColor: "#34495e",  // Darker color for the front side
          color: "#ecf0f1",            // Light color for the text
          padding: "20px",             // Padding for content
        }}
        backCardStyle={{
          backgroundColor: "#2c3e50",  // Dark color for the back side
          borderRadius: "8px",         // Rounded corners
        }}
        backContentStyle={{
          backgroundColor: "#1e272e",  // Darker color for the back side
          color: "#ecf0f1",            // Light color for the text
          padding: "20px",             // Padding for content
        }}
        FlashcardArrayStyle={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Box shadow for depth
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transitions
          color: "white", // White text color
        }}
        onCardChange={(id, index) => {
          // Handle card change event
        }}
        onCardFlip={(id, index, state) => {
          // Handle card flip event
        }}
      />
    </div>
  );
}

export default Flashcards;
