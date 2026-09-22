import Image from "next/image";
import { Product } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ProductSpecsProps {
  specs: { label: string; value: string }[];
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  if (!specs || specs.length === 0) return null;

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Technical Specifications</h3>
      <div className="border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <tbody className="divide-y divide-slate-200">
            {specs.map((spec, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 bg-slate-50/50 font-medium text-slate-600 w-1/3 border-r border-slate-200">
                  {spec.label}
                </td>
                <td className="py-3 px-4 text-slate-900">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
