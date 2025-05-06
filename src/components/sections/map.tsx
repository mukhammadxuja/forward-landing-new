'use client';

import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { useAppContext } from '@/context/app-context';
import { AnimatePresence, motion } from 'framer-motion';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Check, CheckCircle, ChevronDown, Heart, Maximize, Trash, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import { Button } from '../ui/button';

type BillboardType = {
  id: string;
  price: string;
  status: 'taken' | 'not_taken';
  zone: string;
  type: string;
  region: string;
  position: { lat: number; lng: number };
  availableUntil: string;
  image: string;
  address: string;
  number: string;
  size: string;
};

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const regions = {
  Toshkent: { lat: 41.3111, lng: 69.2797 },
  Jizzax: { lat: 40.139879, lng: 67.830194 },
  Samarqand: { lat: 39.672395, lng: 66.976168 },
};

export default function Map({
  className,
  mapPage = false,
  favoritePage = false,
  billboardData,
}: {
  className?: string;
  mapPage?: boolean;
  favoritePage?: boolean;
  billboardData: BillboardType[];
}) {
  const [openImage, setOpenImage] = useState(false);
  const [filter, setFilter] = useState<'all' | 'taken' | 'not_taken'>('all');
  const [zoneFilter, setZoneFilter] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [activeBillboard, setActiveBillboard] = useState<(typeof billboardData)[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [regionFilter, setRegionFilter] = useState<keyof typeof regions | ''>('');

  const filters = useMemo(
    () => ({
      status: filter,
      zone: zoneFilter,
      price: [minPrice, maxPrice] as [number, number],
      date: selectedDate,
      type: typeFilter,
      region: regionFilter,
    }),
    [filter, zoneFilter, minPrice, maxPrice, selectedDate, typeFilter, regionFilter],
  );

  const filteredData = useMemo(() => {
    return billboardData.filter((item) => {
      const itemPrice = parseInt(item.price.replace(/\D/g, ''), 10) || 0;
      const isStatusMatch = filters.status === 'all' || item.status === filters.status;
      const isZoneMatch = filters.zone === '' || item.zone === filters.zone;
      const isPriceMatch = itemPrice >= filters.price[0] && itemPrice <= filters.price[1];
      const isDateMatch = !filters.date || new Date(item.availableUntil) >= new Date(filters.date);
      const isTypeMatch = filters.type === '' || item.type === filters.type;
      const isRegionMatch = filters.region === '' || item.region === filters.region;

      return isStatusMatch && isZoneMatch && isPriceMatch && isDateMatch && isTypeMatch && isRegionMatch;
    });
  }, [billboardData, filters]);

  function CenterMap() {
    const map = useMap();

    useEffect(() => {
      if (regionFilter) {
        const region = regions[regionFilter];
        map.setView([region.lat, region.lng], 10);
      }
    }, [map, regionFilter]);

    return null;
  }

  return (
    <div id="map" className={`flex flex-col w-full ${!mapPage && 'py-10 lg:py-16'}`}>
      <h4
        className={`section-title whitespace-nowrap flex items-center gap-2 mb-8 lg:mb-12 ${
          mapPage ? 'hidden' : 'block'
        }`}
      >
        <span>Наши проекты в</span>
        <span className="text-emerald-600/80 cursor-pointer">Узбекистане</span>
        <ChevronDown className="text-2xl text-emerald-600/80 cursor-pointer" />
      </h4>

      <div className={`flex gap-4 mb-4 w-full ${mapPage ? 'hidden' : 'block'}`}>
        <div className="w-full">
          <Select value={filter} onValueChange={(value) => setFilter(value as 'taken' | 'not_taken' | 'all')}>
            <SelectTrigger>
              <SelectValue placeholder="Zona tanlang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Hammasi</SelectItem>
              <SelectItem value="taken">Bandlar</SelectItem>
              <SelectItem value="not_taken">Bo'shlar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Select value={zoneFilter} onValueChange={setZoneFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Zona tanlang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Zona 1</SelectItem>
              <SelectItem value="2">Zona 2</SelectItem>
              <SelectItem value="3">Zona 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* <PriceSlider /> */}

        <div className="w-full">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-gray-50 p-2 rounded-md w-full"
          />
        </div>

        <div className="w-full">
          <Select value={regionFilter} onValueChange={(value) => setRegionFilter(value as keyof typeof regions | '')}>
            <SelectTrigger>
              <SelectValue placeholder="Zona tanlang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Toshkent">Toshkent</SelectItem>
              <SelectItem value="Jizzax">Jizzax</SelectItem>
              <SelectItem value="Samarqand">Samarqand</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Select value={typeFilter} onValueChange={(value) => setTypeFilter(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Zona tanlang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flagstaff">Flagstaff</SelectItem>
              <SelectItem value="led">LED ekran</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className={`relative w-full h-[35rem] bg-gray-200 rounded-2xl overflow-hidden ${className}`}>
        {activeBillboard && (
          <MapCard
            activeBillboard={activeBillboard}
            setActiveBillboard={setActiveBillboard}
            setOpenImage={setOpenImage}
          />
        )}

        {openImage && activeBillboard && (
          <MapImageView activeBillboard={activeBillboard} openImage={openImage} setOpenImage={setOpenImage} />
        )}

        <div className="w-full h-full relative">
          <div className="flex items-center gap-2 absolute top-4 right-4 z-[10000]">
            <Link
              href="/map"
              className="!bg-background rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer"
            >
              <span className="sr-only">Maximize</span>
              <Maximize size={24} className="!text-foreground" />
            </Link>
            {!favoritePage && (
              <Link
                href="/favorites"
                className="!bg-background rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer"
              >
                <span className="sr-only">Favorites</span>
                <Heart size={24} className="!text-foreground" />
              </Link>
            )}
            {mapPage && (
              <Link
                href="/#map"
                className="!bg-background rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer"
              >
                <span className="sr-only">Close</span>
                <X size={24} className="!text-foreground" />
              </Link>
            )}
          </div>

          <MapContainer center={[40.1158, 67.8422]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CenterMap />
            {filteredData.map((billboard) => (
              <Marker
                key={billboard.id}
                position={[billboard.position.lat, billboard.position.lng]}
                icon={billboard.status === 'taken' ? redIcon : greenIcon}
                eventHandlers={{
                  click: () => {
                    setActiveBillboard(billboard);
                  },
                }}
              ></Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

function MapCard({
  activeBillboard,
  setActiveBillboard,
  setOpenImage,
}: {
  activeBillboard: BillboardType;
  setActiveBillboard: React.Dispatch<React.SetStateAction<BillboardType | null>>;
  setOpenImage: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { addToFavorites, removeFromFavorites, favorites } = useAppContext();
  const [isInFavorites, setIsInFavorites] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (!favorites || !activeBillboard) return;

    setIsInFavorites(favorites.some((item) => item.id === activeBillboard.id));
  }, [favorites, activeBillboard]);

  function addAndRemove(billboard: BillboardType) {
    if (isInFavorites) {
      removeFromFavorites(Number(billboard.id));
    } else {
      addToFavorites(billboard);
    }

    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
  }

  return (
    <div className="absolute top-2 left-4 lg:left-12 bg-background shadow-lg rounded-xl p-1 w-80 z-[1000]">
      <div className="relative">
        <img
          src={activeBillboard.image}
          alt="Billboard Image"
          className="rounded-xl mb-4 w-full h-40 object-cover cursor-zoom-in"
          onClick={() => setOpenImage(true)}
        />
        <AnimatePresence>
          {showAnimation && (
            <motion.div
              key="favorite-animation"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10"
            >
              {isInFavorites ? (
                <CheckCircle size={28} className="text-foreground" />
              ) : (
                <Trash size={28} className="text-foreground" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setActiveBillboard(null)}
          className="absolute top-2 right-2 bg-background rounded-full p-2 shadow-md hover:bg-background/80 transition duration-200 ease-in-out cursor-pointer"
        >
          <span className="sr-only">Close</span>
          <X size={14} />
        </button>

        <Badge className="absolute bottom-2 left-2 bg-background text-xs gap-1">
          {activeBillboard.status === 'taken' ? (
            <X className="text-red-500" size={14} />
          ) : (
            <Check className="text-green-500" size={14} />
          )}
          <span>{activeBillboard.status === 'taken' ? 'Занято' : 'Доступно'}</span>
        </Badge>
      </div>
      <div className="space-y-2 text-sm px-4 pb-2">
        <div className="">
          <div className="flex py-1.5 items-start gap-2">
            <strong className="text-gray-200">Адрес:</strong>
            <span className="text-muted-foreground">{activeBillboard.address}</span>
          </div>
          <div className="flex py-1.5 items-center gap-2">
            <strong className="text-gray-200">Тип:</strong>
            <span className="text-muted-foreground">{activeBillboard.type}</span>
          </div>
          <div className="flex py-1.5 items-center gap-2">
            <strong className="text-gray-200">Номер:</strong>
            <span className="text-muted-foreground">{activeBillboard.number}</span>
          </div>
          <div className="flex py-1.5 items-center gap-2">
            <strong className="text-gray-200">Размер:</strong>
            <span className="text-muted-foreground">{activeBillboard.size}</span>
          </div>
          <div className="flex py-1.5 items-center gap-2">
            <strong className="text-gray-200">Зона:</strong>
            <span className="text-muted-foreground">{activeBillboard.zone}</span>
          </div>
          <div className="flex py-1.5 items-center gap-2">
            <strong className="text-gray-200">Цена с НДС:</strong>
            <span className="text-muted-foreground text-base font-medium">{activeBillboard.price}</span>
          </div>
        </div>
        <Button
          className="w-full mt-2"
          size="sm"
          variant={isInFavorites ? 'destructive' : 'default'}
          onClick={() => addAndRemove(activeBillboard)}
        >
          {isInFavorites ? 'Убрать из избранных' : 'Добавить в избранное'}
        </Button>
      </div>
    </div>
  );
}

function MapImageView({
  openImage,
  setOpenImage,
  activeBillboard,
}: {
  openImage: boolean;
  setOpenImage: React.Dispatch<React.SetStateAction<boolean>>;
  activeBillboard: BillboardType | null;
}) {
  return (
    <div className="bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 fixed inset-0 flex items-center justify-center z-[10002]">
      <div className="relative max-w-3xl w-full h-fit overflow-hidden rounded-xl">
        <img
          src={activeBillboard?.image}
          alt="Billboard Image"
          className="w-full h-full object-cover rounded-xl"
          onClick={() => setOpenImage(false)}
        />
        <button
          onClick={() => setOpenImage(false)}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer"
        >
          <span className="sr-only">Close</span>
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
