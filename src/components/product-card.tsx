"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: {
    id: string
    name: string
    description: string
    price: number
    images: string[]
    category: string
    slug: string
  }
}

export function ProductCard({ product, className, ...props }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [isHovering, setIsHovering] = React.useState(false)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const startImageTransition = () => {
    setIsHovering(true)
    if (product.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
      }, 1000)
    }
  }

  const stopImageTransition = () => {
    setIsHovering(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setCurrentImageIndex(0)
  }

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    startImageTransition()
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    stopImageTransition()
  }

  const formatInstallment = (value: number) => {
    return (value / 12).toFixed(2).replace(".", ",")
  }

  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-md", className)} {...props}>
      <Link href={`/produto/${product.slug}`}>
        <div
          className="relative aspect-square overflow-hidden"
          onMouseEnter={startImageTransition}
          onMouseLeave={stopImageTransition}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={product.images[currentImageIndex] || "/placeholder.svg?height=400&width=400"}
            alt={product.name}
            fill
            className="object-cover transition-all duration-300"
          />
          {isMounted && product.images.length > 1 && isHovering && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full bg-white opacity-70",
                    currentImageIndex === index && "opacity-100",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-base">{product.name}</CardTitle>
        <CardDescription className="line-clamp-2 text-xs">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-amber-600">
            R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
          <span className="text-sm text-muted-foreground">ou 12x de R$ {formatInstallment(product.price)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex w-full gap-2">
          <Button asChild className="flex-1 bg-amber-600 hover:bg-amber-700">
            <Link href={`/produto/${product.slug}`}>Ver detalhes</Link>
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Adicionar aos favoritos</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
