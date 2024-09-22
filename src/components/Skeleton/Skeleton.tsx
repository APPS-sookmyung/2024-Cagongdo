import styled, { keyframes } from 'styled-components';

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

const SkeletonItem = styled.div<{ width?: string; height?: string }>`
  animation: ${skeletonLoading} 1s linear infinite alternate;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '20px'};
  border-radius: 4px;
  margin: 5px 0;
`;

interface SkeletonProps {
  width?: string;
  height?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {
  return <SkeletonItem width={width} height={height} />;
};

export default Skeleton;
