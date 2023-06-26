import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";


export default function NavBar() {
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto my-4 max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="ml-2 mr-4 cursor-pointer py-1.5">
          Vista UTP
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
       

       {/* BOTÓN PARA CAMBIAR DE MODO  */}
      <IconButton className="bg-transparent text-xl rounded ">
      <i className="fa-solid fa-moon"></i>
      </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Buscar árbol"
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded">
            Buscar
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
