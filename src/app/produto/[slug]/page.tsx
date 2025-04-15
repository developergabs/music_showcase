"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for a single product
const mockProduct = {
  id: "1",
  name: "Guitarra Stratocaster Fender Player",
  description:
    "A Fender Player Stratocaster é uma guitarra elétrica versátil e de alta qualidade, projetada para músicos que buscam o autêntico som e estilo Fender a um preço acessível. Com corpo em alder, braço em maple e escala em pau-ferro, esta guitarra oferece o clássico timbre Stratocaster com excelente tocabilidade e durabilidade.",
  price: 5999.99,
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  category: "cordas",
  specifications: {
    marca: "Fender",
    modelo: "Player Stratocaster",
    corpo: "Alder (Álamo)",
    braço: "Maple (Bordo)",
    escala: "Pau-ferro",
    trastes: "22 Medium Jumbo",
    captadores: "3 Player Series Alnico 5 Strat Single-Coil",
    controles: "Master Volume, Tone 1 (Neck/Middle), Tone 2 (Bridge)",
    ponte: "2-Point Synchronized Tremolo with Bent Steel Saddles",
    cores: ["Sunburst", "Preto", "Vermelho", "Azul"],
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [selectedColor, setSelectedColor] = React.useState(mockProduct.specifications.cores[0])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mockProduct.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mockProduct.images.length) % mockProduct.images.length)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse em comprar esse produto e gostaria de falar com um dos vendedores: ${mockProduct.name}`,
    )
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank")
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-4">
        <Link href="/produtos" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Voltar para produtos
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Product Images */}
        <div className="lg:col-span-2">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={mockProduct.images[currentImageIndex] || "/placeholder.svg"}
              alt={mockProduct.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Imagem anterior</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Próxima imagem</span>
              </Button>
            </div>
          </div>

          <div className="mt-4 flex space-x-2 overflow-auto pb-2">
            {mockProduct.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square h-20 flex-none overflow-hidden rounded-md border ${
                  currentImageIndex === index ? "ring-2 ring-amber-600" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${mockProduct.name} - Imagem ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold md:text-3xl">{mockProduct.name}</h1>

          <div className="mt-6">
            <div className="text-3xl font-bold text-amber-600">
              R$ {mockProduct.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              ou 12x de R$ {(mockProduct.price / 12).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-2 font-medium">Cor</h3>
            <div className="flex flex-wrap gap-2">
              {mockProduct.specifications.cores.map((cor) => (
                <button
                  key={cor}
                  className={`rounded-md border px-3 py-1 text-sm ${
                    selectedColor === cor ? "border-amber-600 bg-amber-50 text-amber-600" : ""
                  }`}
                  onClick={() => setSelectedColor(cor)}
                >
                  {cor}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Button className="bg-amber-600 hover:bg-amber-700" size="lg" onClick={handleWhatsAppClick}>
              Comprar
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <Heart className="mr-2 h-4 w-4" />
                Favoritar
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="description">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="flex-1">
                  Descrição
                </TabsTrigger>
                <TabsTrigger value="specifications" className="flex-1">
                  Especificações
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4 text-sm leading-relaxed">
                <p>{mockProduct.description}</p>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4">
                <div className="space-y-2 text-sm">
                  {Object.entries(mockProduct.specifications)
                    .filter(([key]) => key !== "cores")
                    .map(([key, value]) => (
                      <div key={key} className="grid grid-cols-2 gap-2 border-b py-2">
                        <div className="font-medium capitalize">{key}</div>
                        <div>{value as string}</div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
