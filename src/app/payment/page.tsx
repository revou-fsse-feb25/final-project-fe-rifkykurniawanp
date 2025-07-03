// app/payment/page.tsx
"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
// import { useSession } from "next-auth/react"; // ← Aktifkan jika butuh auth
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/hooks/useCart"; // ← Sesuaikan dengan lokasi hook

export const dynamic = "force-dynamic";

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  // const { data: session, status } = useSession(); // ← Auth optional
  const {
    cart,
    clearCart,
    total,
  } = useCart("guest"); // ← Ganti "guest" jika ingin dinamis

  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [orderNotes, setOrderNotes] = useState("");
  const [method, setMethod] = useState("qris");
  const [processing, setProcessing] = useState(false);

  const subtotal = total;
  const totalAfterDiscount = subtotal - subtotal * discount;

  const handlePayment = async () => {
    setProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    clearCart();
    alert("✅ Pembayaran berhasil!");
    router.push("/");
  };

  const applyDiscount = () => {
    if (discountCode.toLowerCase() === "save10") {
      setDiscount(0.1);
      alert("Diskon 10% berhasil diterapkan");
    } else if (discountCode.toLowerCase() === "save20") {
      setDiscount(0.2);
      alert("Diskon 20% berhasil diterapkan");
    } else {
      setDiscount(0);
      alert("❌ Kode diskon tidak valid");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Pembayaran</CardTitle>
        </CardHeader>

        <CardContent className="grid md:grid-cols-2 gap-6">
          {/* ⬅️ Bagian kiri: detail pesanan */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Detail Pesanan</h2>

            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex justify-between border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.product.description?.slice(0, 40)}...
                  </p>
                </div>
                <span className="font-semibold">
                  Rp {(item.product.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}

            <div className="pt-2 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rp {subtotal.toLocaleString()}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Diskon ({discount * 100}%)</span>
                  <span>-Rp {(subtotal * discount).toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between font-bold border-t pt-2">
                <span>Total</span>
                <span>Rp {totalAfterDiscount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* ⬅️ Bagian kanan: input pembayaran */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Metode Pembayaran</label>
              <Select onValueChange={setMethod} defaultValue="qris">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih metode pembayaran" />
                </SelectTrigger>
                <SelectContent>
                  {/* Kartu Kredit */}
                  <SelectItem value="bri">Kartu Kredit - BRI</SelectItem>
                  <SelectItem value="bca">Kartu Kredit - BCA</SelectItem>
                  <SelectItem value="bni">Kartu Kredit - BNI</SelectItem>
                  <SelectItem value="mandiri">Kartu Kredit - Mandiri</SelectItem>

                  {/* E-Wallet */}
                  <SelectItem value="qris">QRIS</SelectItem>
                  <SelectItem value="shopee">E-Wallet - Shopee</SelectItem>
                  <SelectItem value="dana">E-Wallet - Dana</SelectItem>
                  <SelectItem value="gopay">E-Wallet - GoPay</SelectItem>
                  <SelectItem value="jago">E-Wallet - Jago</SelectItem>

                  {/* Toko Offline */}
                  <SelectItem value="indomart">Toko Offline - Indomart</SelectItem>
                  <SelectItem value="alfamart">Toko Offline - Alfamart</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm mb-1">Catatan Pesanan</label>
              <Textarea
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                placeholder="Contoh: Tolong bungkus sebagai hadiah"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Kode Diskon</label>
              <div className="flex gap-2">
                <Input
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Contoh: SAVE10"
                />
                <Button onClick={applyDiscount}>Terapkan</Button>
              </div>
            </div>

            <Button
              className="w-full mt-4"
              onClick={handlePayment}
              disabled={processing}
            >
              {processing
                ? "Memproses..."
                : `Bayar Rp ${totalAfterDiscount.toLocaleString()}`}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<p>Memuat halaman pembayaran...</p>}>
      <PaymentContent />
    </Suspense>
  );
}