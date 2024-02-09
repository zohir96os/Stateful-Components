import React, { useState } from "react";
import Text from "./Text";

const Portrait = () => {
  let spongePopCharacters = [
    {
      name: "SpongeBob SquarePants",
      description:
        "SpongeBob is an enthusiastic and optimistic sea sponge who lives in a pineapple under the sea in the fictional underwater city of Bikini Bottom.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Patrick Star",
      description:
        "Patrick is SpongeBob's best friend and a friendly, albeit dim-witted, pink starfish who lives under a rock next to SpongeBob's pineapple.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Squidward Tentacles",
      description:
        "Squidward is SpongeBob's grumpy and cynical neighbor who is an octopus with a large, bald head and a long, drooping nose.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Mr. Krabs",
      description:
        "Mr. Krabs is the money-obsessed owner of the Krusty Krab and SpongeBob's boss. He is a red crab who wears a shirt with a dollar sign on it.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Sandy Cheeks",
      description:
        "Sandy is a thrill-seeking squirrel from Texas who lives in an air dome filled with oxygen in Bikini Bottom. She is a scientist and inventor.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Plankton",
      description:
        "Plankton is a tiny green copepod who owns the rival restaurant to the Krusty Krab, the Chum Bucket. He is constantly plotting to steal the Krabby Patty secret formula.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Gary the Snail",
      description:
        "Gary is SpongeBob's pet sea snail who communicates through meows and other sounds. He is intelligent and often serves as the voice of reason for SpongeBob.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Pearl Krabs",
      description:
        "Pearl is Mr. Krabs' teenage daughter who is a whale. Despite her wealthy upbringing, she is down-to-earth and enjoys the company of her friends, including SpongeBob.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Mrs. Puff",
      description:
        "Mrs. Puff is SpongeBob's boating school teacher who is a pufferfish. She is often exasperated by SpongeBob's reckless driving during his boating exams.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Mermaid Man",
      description:
        "Mermaid Man is a retired superhero who resides in a retirement home with his sidekick, Barnacle Boy. Together, they occasionally come out of retirement to fight evil in Bikini Bottom.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Barnacle Boy",
      description:
        "Barnacle Boy is Mermaid Man's sidekick and often feels overshadowed by his more famous partner. Despite this, he is a skilled superhero in his own right.",
      image: "https://placehold.co/80x80",
    },
    {
      name: "Larry the Lobster",
      description:
        "Larry is a muscular and athletic lobster who is a lifeguard at Goo Lagoon, a popular beach destination in Bikini Bottom. He is often seen working out and participating in sports.",
      image: "https://placehold.co/80x80",
    },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handlePortraitClick = (index) => {
    setSelectedCharacter(spongePopCharacters[index]);
  };

  return (
    <div className="portrait">
      <div className="portrait-pic">
        {spongePopCharacters.map((character, index) => (
          <img
            src={character.image}
            alt={character.name}
            key={index}
            onClick={() => handlePortraitClick(index)}
          />
        ))}
      </div>
      <div className="portrait-text">
        {selectedCharacter && (
          <Text
            charname={selectedCharacter.name}
            charDescription={selectedCharacter.description}
          />
        )}
      </div>
    </div>
  );
};

export default Portrait;
