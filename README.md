This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Área privada

La ruta `/privado` requiere una clave personal. Configura estas variables en el servidor (en `.env.local` para desarrollo o en el entorno del despliegue):

- `PRIVATE_ACCESS_PASSWORD`: clave personal de hasta 256 caracteres. Se aplica el mismo límite en producción y en desarrollo.
- `PRIVATE_SESSION_SECRET`: un secreto aleatorio distinto, de al menos 32 caracteres, para firmar la sesión.

Puedes ejecutar `openssl rand -hex 32` una vez para cada variable. Guarda la clave personal en tu gestor de contraseñas. Reinicia el servidor local después de actualizar `.env.local`. La sesión dura ocho horas y el cambio de cualquiera de las dos variables invalida las sesiones anteriores.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
