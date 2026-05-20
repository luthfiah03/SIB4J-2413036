import Date from "./Date";
import Price from "./Price";

export default function CardScheduleDestination() {
  return (
    <div className="flex bg-white border">

      <div className="border-r px-4 py-3 min-w">
        <Date day="Sel, 19 Mei 2026"/>
        <Price price="IDR 4.156.740"/>
      </div>

      <div className="border-r px-4 py-3">
        <Date day="Rab, 20 Mei 2026"/>
        <Price price="IDR 3.655.576"/>
      </div>

      <div className="border-r px-4 py-3">
        <Date day="Kam, 21 Mei 2026"/>
        <Price price="IDR 3.450.678"/>
      </div>

      <div className="border-r px-4 py-3">
        <Date day="Jum, 22 Mei 2026"/>
        <Price price="IDR 3.510.124"/>
      </div>

      <div className="border-r px-4 py-3">
        <Date day="Sab, 23 Mei 2026"/>
        <Price price="IDR 3.732.537"/>
      </div>

      <div className="border-r px-4 py-3">
        <Date day="Min, 24 Mei 2026"/>
        <Price price="IDR 3.808.499"/>
      </div>

      <div className="border-r px-4 py-3">
        <Date day="Sen, 25 Mei 2026"/>
        <Price price="IDR 3.510.124"/>
      </div>

      <div className="border-r px-4 py-3">
        <Date day="Sel, 26 Mei 2026"/>
        <Price price="IDR 4.046.380"/>
      </div>

      <div className="border-r px-4 py-3">
        <Date day="Rab, 27 Mei 2026"/>
        <Price price="IDR 3.510.124"/>
      </div>

      <div className="px-2 py-3">
        <Date day="Kam, 28 Mei 2026"/>
        <Price price="IDR 3.510.124"/>
      </div>

    </div>
  );
}