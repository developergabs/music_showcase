"use client"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { useCart } from "@/contexts/cart-context"

const formatPrice = (price: number) => {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  const handleFinishPurchase = () => {
    if (items.length === 0) return

    const itemsList = items
      .map((item) => `${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}`)
      .join("\n")

    const message = encodeURIComponent(
      `Olá! Tenho interesse em comprar esses produtos e gostaria de falar com um dos vendedores:\n\n${itemsList}\n\nTotal: ${formatPrice(totalPrice)}`,
    )

    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank")
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md bg-white">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Carrinho de Compras
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              ({totalItems} {totalItems === 1 ? "item" : "itens"})
            </span>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 py-12">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Seu carrinho está vazio</p>
            <Button variant="outline" className="mt-4" onClick={() => setIsCartOpen(false)}>
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <div className="flex-1 overflow-auto py-4">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex border-b pb-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <div>
                        <Link
                          href={`/produto/${item.slug}`}
                          className="text-sm font-medium hover:underline"
                          onClick={() => setIsCartOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-sm text-amber-600 font-medium">{formatPrice(item.price)}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remover</span>
                      </Button>
                    </div>
                    <div className="flex items-center mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Diminuir quantidade</span>
                      </Button>
                      <span className="mx-2 w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Aumentar quantidade</span>
                      </Button>
                      <span className="ml-auto text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {items.length > 0 && (
          <SheetFooter className="border-t pt-4">
            <div className="w-full space-y-4">
              <div className="flex justify-between text-base font-medium">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700" onClick={handleFinishPurchase}>
                Finalizar Compra
              </Button>
              <Button variant="outline" className="w-full" onClick={() => setIsCartOpen(false)}>
                Continuar Comprando
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
