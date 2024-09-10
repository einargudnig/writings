type NewType = string;



export default function OG(
  // biome-ignore lint/style/useDefaultParameterLast: <explanation>
  title: NewType = "<Site Name> - Default Title",
  heroImageURL: string,
) {
  const basePath = "http://localhost:3001/"
  const backgroundImageURL = `${basePath}opengraph/og.png`;
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundImage: `url(${backgroundImageURL})`,
      }}
    >
      <h1
        style={{
          marginLeft: 190,
          marginRight: 190,
          display: "flex",
          fontSize: 130,
          fontWeight: "bold",
          color: "white",
          fontFamily: "Geist",
          whiteSpace: "pre-wrap",
          lineHeight: '120px',
          letterSpacing: '-0.05em',
        }}
      >
        {title}
      </h1>
    </div>
  );
}