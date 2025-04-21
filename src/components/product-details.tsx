"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  slug: string
  specifications: {
    [key: string]: any
    cores?: string[]
  }
}

const formatInstallment = (value: number) => {
  return (value / 12).toFixed(2).replace(".", ",")
}

export function ProductDetails({ product }: { product: Product }) {
  const { addItem, setIsCartOpen } = useCart()
  const { toast } = useToast()
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [selectedColor, setSelectedColor] = React.useState(
    product.specifications.cores ? product.specifications.cores[0] : "",
  )

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      slug: product.slug,
    })

    toast({
      title: "Produto adicionado ao carrinho",
      description: `${product.name} foi adicionado ao seu carrinho.`,
      duration: 3000,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 max-w-7xl">
      <div className="mb-4">
        <Link href="/produtos" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Voltar para produtos
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={product.name}
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
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square h-20 flex-none overflow-hidden rounded-md border ${
                  currentImageIndex === index ? "ring-2 ring-amber-600" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Imagem ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold md:text-3xl">{product.name}</h1>

          <div className="mt-6">
            <div className="text-3xl font-bold text-amber-600">
              R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">ou 12x de R$ {formatInstallment(product.price)}</div>
          </div>

          {product.specifications.cores && (
            <div className="mt-6">
              <h3 className="mb-2 font-medium">Cor</h3>
              <div className="flex flex-wrap gap-2">
                {product.specifications.cores.map((cor: string) => (
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
          )}

          <div className="mt-8 flex flex-col gap-3">
            <Button className="bg-amber-600 hover:bg-amber-700" size="lg" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Adicionar ao Carrinho
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
              <TabsList className="w-full border-b rounded-none p-0 h-auto">
                <TabsTrigger
                  value="description"
                  className="flex-1 rounded-none border-b-2 border-transparent py-3 font-medium data-[state=active]:border-amber-600 data-[state=active]:text-amber-600 data-[state=active]:shadow-none"
                >
                  Descrição
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="flex-1 rounded-none border-b-2 border-transparent py-3 font-medium data-[state=active]:border-amber-600 data-[state=active]:text-amber-600 data-[state=active]:shadow-none"
                >
                  Especificações
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4 text-sm leading-relaxed border rounded-md p-4 bg-white">
                <p>{product.description}</p>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4 border rounded-md p-4 bg-white">
                <div className="space-y-2 text-sm">
                  {Object.entries(product.specifications)
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
