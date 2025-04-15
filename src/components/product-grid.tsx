"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ProductCard } from "@/components/product-card"

// Mock data for products - Usando placeholders até que as imagens estejam disponíveis
const mockProducts = [
  {
    id: "1",
    name: "Guitarra Stratocaster Fender Player",
    description: "Guitarra elétrica Stratocaster da série Player, corpo em alder, braço em maple, escala em pau-ferro",
    price: 5999.99,
    images: [
      "/images/fender_squier1.jpg",
      "/images/fender_squier2.jpg",
      "/images/fender_squier3.jpg",
    ],
    category: "cordas",
    slug: "guitarra-stratocaster-fender-player",
  },
  {
    id: "2",
    name: "Violão Takamine GD30CE",
    description: "Violão eletroacústico com cutaway, tampo em abeto sólido, laterais e fundo em mogno",
    price: 4599.99,
    images: ["/images/takamine_01.jpg", "/images/takamine_02.jpg"],
    category: "cordas",
    slug: "violao-takamine-gd30ce",
  },
  {
    id: "3",
    name: "Baixo Jazz Bass Squier Affinity",
    description: "Baixo elétrico de 4 cordas, corpo em poplar, braço em maple, escala em laurel",
    price: 3299.99,
    images: ["/images/bass_squier01.jpg", "/images/bass_squier02.jpg"],
    category: "cordas",
    slug: "baixo-jazz-bass-squier-affinity",
  },
  {
    id: "4",
    name: "Teclado Yamaha PSR-E373",
    description: "Teclado arranjador com 61 teclas, 622 timbres, 205 estilos de acompanhamento",
    price: 2499.99,
    images: ["/images/yamaha_psr1.jpg", "/images/yamaha_psr2.jpg", "/images/yamaha_psr3.jpg"],
    category: "teclas",
    slug: "teclado-yamaha-psr-e373",
  },
  {
    id: "5",
    name: "Piano Digital Casio Privia PX-S1100",
    description: "Piano digital compacto com 88 teclas com ação de martelo, 18 timbres, Bluetooth",
    price: 5999.99,
    images: ["/images/casio_privia01.jpg", "/images/casio_privia02.jpg"],
    category: "teclas",
    slug: "piano-digital-casio-privia-px-s1100",
  },
  {
    id: "6",
    name: "Bateria Acústica Pearl Roadshow",
    description: 'Kit completo com bumbo 22", caixa 14", tons 10" e 12", surdo 16", pratos e ferragens',
    price: 4799.99,
    images: ["/images/pearl_road1.jpg", "/images/pearl_road2.jpg", "/images/pearl_road3.jpg"],
    category: "percussao",
    slug: "bateria-acustica-pearl-roadshow",
  },
  {
    id: "7",
    name: "Amplificador Marshall MG30GFX",
    description: "Amplificador para guitarra com 30W, 2 canais, efeitos digitais e entrada para fones",
    price: 2199.99,
    images: ["/images/marshall_mg1.jpg", "/images/marshall_mg2.jpg"],
    category: "equipamentos",
    slug: "amplificador-marshall-mg30gfx",
  },
  {
    id: "8",
    name: "Pedaleira Multi-efeitos Boss GT-1000CORE",
    description: "Pedaleira multi-efeitos com tecnologia AIRD, 24 simulações de amplificadores, Bluetooth",
    price: 7499.99,
    images: ["/images/boss_gt1.jpg", "/images/boss_gt2.jpg"],
    category: "equipamentos",
    slug: "pedaleira-multi-efeitos-boss-gt-1000core",
  },
]

export default function ProductGrid() {
  const [products, setProducts] = React.useState(mockProducts)
  const [sortOrder, setSortOrder] = React.useState<"default" | "price-asc" | "price-desc" | "name-asc">("default")
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSort = (order: typeof sortOrder) => {
    setSortOrder(order)
    let sortedProducts = [...mockProducts]

    switch (order) {
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Default order (no sorting)
        sortedProducts = [...mockProducts]
    }

    setProducts(sortedProducts)
    setIsDropdownOpen(false) // Fechar o dropdown após a seleção
  }

  return (
    <div className="mt-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="text-sm text-muted-foreground">Exibindo {products.length} produtos</span>
        </div>
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Ordenar por
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={5} className="z-50">
            <DropdownMenuItem onClick={() => handleSort("default")}>Relevância</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("price-asc")}>Menor preço</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("price-desc")}>Maior preço</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("name-asc")}>Ordem alfabética</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
