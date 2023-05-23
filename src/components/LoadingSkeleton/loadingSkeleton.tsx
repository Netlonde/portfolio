import { LoadingSkeletonProps } from "./loadingSkeleton.props";

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ width, height }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "4px",
        animation: "loading-animation 1.5s infinite ease-in-out",
      }}
    ></div>
  );
};

export default LoadingSkeleton;
