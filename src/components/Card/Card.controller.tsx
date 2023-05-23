function useCardController() {
  const cardsData = [
    {
      title: "Frontend Development",
      description:
        "I  can build a beautiful and scalable SPA using HTML, CSS and React.",
    },
    {
      title: "Backend Development",
      description:
        "Handle database, server, api using Express & other popular frameworks.",
    },
    {
      title: "API Development",
      description:
        "I  can develop robust REST API using django-rest-api & node API.",
    },
    {
      title: "Mobile Development",
      description:
        "I  can build a beautiful and scalable APP using React Native.",
    },
    {
      title: "UI/UX designer",
      description: "Stunning user interface designer using Figma and Framer.",
    },
    {
      title: "Wathever",
      description:
        "I  can build a beautiful and scalable APP using React Native.",
    },
  ];

  return { cardsData };
}

export default useCardController;
