"use client";
interface ContainerProps {
  children: React.ReactNode;
  //React.ReactNode: tipo generico que se usa comunmente en react para representar cualquier cosa que pueda ser renderizada dentro de un componente de react, como elementos JSX, cadenas de texto, numeros, etc
}

// const Container: React.FC<ContainerProps> = ({children}) => {
//   return (
//     <div>{children}</div>
//   )
// }

function Container({ children }: ContainerProps): React.ReactElement {
  //React.ReactElement indica que esta funcion devuelve un elemento React.
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
}

export default Container;
