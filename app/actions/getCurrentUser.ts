import { getServerSession } from "next-auth/next"; //obtener la sesion del servidor del usuario actual
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  //funcion que devuelve la sesion obtenida
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currrentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currrentUser) {
      return null;
    }
    return currrentUser;
  } catch (error: any) {
    return null;
  }
}
