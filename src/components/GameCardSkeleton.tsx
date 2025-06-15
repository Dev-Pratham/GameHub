import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    // The width value is arbitrary, adjust as needed
    // In this case the width is set to 100% to fill the parent container
    // This is a skeleton card component that mimics the structure of the GameCard
    <Card.Root width="100%">
      <Card.Header />
      {/* The height value is arbitrary  */}
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCardSkeleton;
