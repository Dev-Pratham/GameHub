import { HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Stack gap="6" maxW="xs">
      <Skeleton height="325px" width="408px" borderRadius={10} />
      <HStack width="full">
        <SkeletonText noOfLines={2} />
      </HStack>
    </Stack>
  );
};

export default GameCardSkeleton;
