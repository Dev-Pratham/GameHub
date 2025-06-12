import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    // The width value is arbitrary, adjust as needed
    <Card.Root width={285}>
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
