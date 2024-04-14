import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

export default function ExploreContainer({ name }: ContainerProps) {
  return (
    <div className="container">
      <strong>{name}</strong>
      <h1>{window.innerWidth}</h1>
      <h1 className="text-9xl font-bold underline">Hello world!</h1>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
}
