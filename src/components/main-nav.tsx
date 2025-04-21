"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Guitar, Keyboard, Drum, Speaker, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/contexts/cart-context"
import { SearchBar } from "@/components/search-bar"

export function MainNav() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = React.useState(false)
  const { setIsCartOpen, totalItems } = useCart()

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const menuImages = {
    cordas: "/placeholder.svg?height=400&width=400",
    teclas: "/placeholder.svg?height=400&width=400",
    percussao: "/placeholder.svg?height=400&width=400",
    equipamentos: "/placeholder.svg?height=400&width=400",
  }

  return (
    <div className="flex h-16 items-center px-4 border-b">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="mr-2 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4 mt-8">
            <Link href="/produtos/cordas" className="flex items-center gap-2 text-lg font-medium">
              <Guitar className="h-5 w-5" />
              Cordas
            </Link>
            <Link href="/produtos/teclas" className="flex items-center gap-2 text-lg font-medium">
              <Keyboard className="h-5 w-5" />
              Teclas
            </Link>
            <Link href="/produtos/percussao" className="flex items-center gap-2 text-lg font-medium">
              <Drum className="h-5 w-5" />
              Percussão
            </Link>
            <Link href="/produtos/equipamentos" className="flex items-center gap-2 text-lg font-medium">
              <Speaker className="h-5 w-5" />
              Equipamentos
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">MusicStore</span>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-1 hover:bg-amber-50 data-[state=open]:bg-amber-100">
              <Guitar className="h-4 w-4" />
              Cordas
            </NavigationMenuTrigger>
            <NavigationMenuContent className="max-w-[95vw] bg-white shadow-lg rounded-md border z-50">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative overflow-hidden"
                      href="/produtos/cordas"
                      style={{
                        background: "linear-gradient(to bottom, rgb(245, 158, 11), rgb(180, 83, 9))",
                      }}
                    >
                      {isMounted && (
                        <div
                          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                          style={{
                            backgroundImage: `url('${menuImages.cordas}')`,
                            filter: "saturate(1.2) contrast(1.1)",
                          }}
                        />
                      )}
                      <div className="relative z-10">
                        <Guitar className="h-6 w-6 text-white" />
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Instrumentos de Cordas</div>
                        <p className="text-sm leading-tight text-white/90">
                          Explore nossa coleção de guitarras, violões, baixos e mais.
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/cordas/guitarras"
                    >
                      <div className="text-sm font-medium leading-none">Guitarras</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Elétricas, semi-acústicas e mais
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/cordas/violoes"
                    >
                      <div className="text-sm font-medium leading-none">Violões</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Acústicos, clássicos e eletroacústicos
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/cordas/baixos"
                    >
                      <div className="text-sm font-medium leading-none">Baixos</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Elétricos, acústicos e mais
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-1 hover:bg-amber-50 data-[state=open]:bg-amber-100">
              <Keyboard className="h-4 w-4" />
              Teclas
            </NavigationMenuTrigger>
            <NavigationMenuContent className="max-w-[95vw] bg-white shadow-lg rounded-md border z-50">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative overflow-hidden"
                      href="/produtos/teclas"
                      style={{
                        background: "linear-gradient(to bottom, rgb(245, 158, 11), rgb(180, 83, 9))",
                      }}
                    >
                      {isMounted && (
                        <div
                          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                          style={{
                            backgroundImage: `url('${menuImages.teclas}')`,
                            filter: "saturate(1.2) contrast(1.1)",
                          }}
                        />
                      )}
                      <div className="relative z-10">
                        <Keyboard className="h-6 w-6 text-white" />
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Instrumentos de Teclas</div>
                        <p className="text-sm leading-tight text-white/90">
                          Descubra nossa seleção de pianos, teclados e sintetizadores.
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/teclas/pianos"
                    >
                      <div className="text-sm font-medium leading-none">Pianos</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Digitais, acústicos e de cauda
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/teclas/teclados"
                    >
                      <div className="text-sm font-medium leading-none">Teclados</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Arranjadores, controladores e workstations
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/teclas/sintetizadores"
                    >
                      <div className="text-sm font-medium leading-none">Sintetizadores</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Analógicos, digitais e modulares
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-1 hover:bg-amber-50 data-[state=open]:bg-amber-100">
              <Drum className="h-4 w-4" />
              Percussão
            </NavigationMenuTrigger>
            <NavigationMenuContent className="max-w-[95vw] bg-white shadow-lg rounded-md border z-50">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative overflow-hidden"
                      href="/produtos/percussao"
                      style={{
                        background: "linear-gradient(to bottom, rgb(245, 158, 11), rgb(180, 83, 9))",
                      }}
                    >
                      {isMounted && (
                        <div
                          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                          style={{
                            backgroundImage: `url('${menuImages.percussao}')`,
                            filter: "saturate(1.2) contrast(1.1)",
                          }}
                        />
                      )}
                      <div className="relative z-10">
                        <Drum className="h-6 w-6 text-white" />
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Instrumentos de Percussão</div>
                        <p className="text-sm leading-tight text-white/90">
                          Conheça nossa linha de baterias e instrumentos de percussão.
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/percussao/baterias"
                    >
                      <div className="text-sm font-medium leading-none">Baterias</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Acústicas, eletrônicas e híbridas
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/percussao/pratos"
                    >
                      <div className="text-sm font-medium leading-none">Pratos</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Crashes, rides, hi-hats e mais
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/percussao/percussao-diversos"
                    >
                      <div className="text-sm font-medium leading-none">Percussão Diversos</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Pandeiros, congas, bongôs e mais
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-1 hover:bg-amber-50 data-[state=open]:bg-amber-100">
              <Speaker className="h-4 w-4" />
              Equipamentos
            </NavigationMenuTrigger>
            <NavigationMenuContent className="max-w-[95vw] bg-white shadow-lg rounded-md border z-50">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative overflow-hidden"
                      href="/produtos/equipamentos"
                      style={{
                        background: "linear-gradient(to bottom, rgb(245, 158, 11), rgb(180, 83, 9))",
                      }}
                    >
                      {isMounted && (
                        <div
                          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                          style={{
                            backgroundImage: `url('${menuImages.equipamentos}')`,
                            filter: "saturate(1.2) contrast(1.1)",
                          }}
                        />
                      )}
                      <div className="relative z-10">
                        <Speaker className="h-6 w-6 text-white" />
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Equipamentos Musicais</div>
                        <p className="text-sm leading-tight text-white/90">
                          Amplificadores, pedais, interfaces e mais para seu setup.
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/equipamentos/amplificadores"
                    >
                      <div className="text-sm font-medium leading-none">Amplificadores</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Para guitarra, baixo e teclado
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/equipamentos/pedais"
                    >
                      <div className="text-sm font-medium leading-none">Pedais e Pedaleiras</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Distorção, delay, reverb e mais
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/produtos/equipamentos/audio"
                    >
                      <div className="text-sm font-medium leading-none">Áudio Profissional</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Interfaces, monitores e microfones
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex items-center space-x-4">
        <SearchBar />
        <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)} className="relative">
          <ShoppingCart className="h-5 w-5" />
          {isMounted && totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-xs text-white">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Carrinho</span>
        </Button>
      </div>
    </div>
  )
}
