export const Concepts = [
    {
        title: "Data types",
        description:"This is a fundamental concept in any programming language"
    },
    {
        title: "OOPS",
        description:"Object oriented programmings. "
    },
    {
        title: "functions",
        description:"Reusable code blocks ",
        level:"beginner"
    }
  ]

  export function Content(props){
    return(
      <li>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
      </li>
    );
  }