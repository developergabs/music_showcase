"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Search, X } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Mock de produtos para a busca
const allProducts = [
  {
    id: "1",
    name: "Guitarra Stratocaster Fender Player",
    price: 5999.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "guitarra-stratocaster-fender-player",
    category: "cordas",
  },
  {
    id: "2",
    name: "Violão Takamine GD30CE",
    price: 4599.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "violao-takamine-gd30ce",
    category: "cordas",
  },
  {
    id: "3",
    name: "Baixo Jazz Bass Squier Affinity",
    price: 3299.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "baixo-jazz-bass-squier-affinity",
    category: "cordas",
  },
  {
    id: "4",
    name: "Teclado Yamaha PSR-E373",
    price: 2499.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "teclado-yamaha-psr-e373",
    category: "teclas",
  },
  {
    id: "5",
    name: "Piano Digital Casio Privia PX-S1100",
    price: 5999.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "piano-digital-casio-privia-px-s1100",
    category: "teclas",
  },
  {
    id: "6",
    name: "Bateria Acústica Pearl Roadshow",
    price: 4799.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "bateria-acustica-pearl-roadshow",
    category: "percussao",
  },
  {
    id: "7",
    name: "Amplificador Marshall MG30GFX",
    price: 2199.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "amplificador-marshall-mg30gfx",
    category: "equipamentos",
  },
  {
    id: "8",
    name: "Pedaleira Multi-efeitos Boss GT-1000CORE",
    price: 7499.99,
    image: "/placeholder.svg?height=400&width=400",
    slug: "pedaleira-multi-efeitos-boss-gt-1000core",
    category: "equipamentos",
  },
]

export function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isSearchFocused, setIsSearchFocused] = React.useState(false)
  const [suggestions, setSuggestions] = React.useState<typeof allProducts>([])
  const searchRef = React.useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Função para filtrar produtos com base na consulta de pesquisa
  const filterProducts = (query: string) => {
    if (!query.trim()) {
      setSuggestions([])
      return
    }

    const normalizedQuery = query.toLowerCase().trim()
    const filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery),
    )

    setSuggestions(filtered.slice(0, 5)) // Limitar a 5 sugestões
  }

  // Atualizar sugestões quando a consulta muda
  React.useEffect(() => {
    filterProducts(searchQuery)
  }, [searchQuery])

  // Fechar sugestões quando clicar fora
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Lidar com a submissão da pesquisa
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/produtos?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchFocused(false)
    }
  }

  // Formatar preço
  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  }

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <Input
          type="search"
          placeholder="Buscar produtos..."
          className="w-[200px] md:w-[300px] pr-10 border-zinc-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
        />
        {searchQuery && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-8 top-0 h-full"
            onClick={() => setSearchQuery("")}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Limpar</span>
          </Button>
        )}
        <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
          <Search className="h-4 w-4" />
          <span className="sr-only">Buscar</span>
        </Button>
      </form>

      {/* Sugestões de pesquisa */}
      {isSearchFocused && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 max-h-[400px] overflow-auto">
          <ul className="py-2">
            {suggestions.map((product) => (
              <li key={product.id} className="px-3">
                <Link
                  href={`/produto/${product.slug}`}
                  className="flex items-center gap-3 p-2 hover:bg-zinc-50 rounded-md"
                  onClick={() => setIsSearchFocused(false)}
                >
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 truncate">{product.name}</p>
                    <p className="text-sm text-amber-600">{formatPrice(product.price)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
