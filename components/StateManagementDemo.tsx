"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp } from "lucide-react";

// Gerador de dados simulados
const generateDataPoint = (timestamp: number, factor = 1) => {
  const base = Math.sin(timestamp / 10) * 5 + 10;
  const random = Math.random() * 3 * factor;
  const value = Math.max(0, base + random);

  return {
    timestamp,
    clusterfuck: Math.round(value * 10) / 10,
    nightmareLatency: Math.max(
      0,
      Math.round((Math.sin(timestamp / 8) * 3 + Math.random() * 5) * 10) / 10
    ),
    angryUsers: Math.floor(Math.random() * 5) + Math.floor(value),
  };
};

// Cores do gráfico
const CHART_COLORS = {
  clusterfuck: "#FF6B6B", // Vermelho vibrante
  nightmareLatency: "#4ECDC4", // Turquesa
  angryUsers: "#FFD166", // Amarelo quente
};

// Chart configuration with sarcastic labels
const chartConfig = {
  clusterfuck: {
    label: "Loucas Aventuras do Servidor",
    color: CHART_COLORS.clusterfuck,
  },
  nightmareLatency: {
    label: "Tempo de Resposta (Paciente)",
    color: CHART_COLORS.nightmareLatency,
  },
  angryUsers: {
    label: "Usuários em Ação",
    color: CHART_COLORS.angryUsers,
  },
};

export default function StateManagementDemo() {
  // State management - the exact thing this demo is about
  const [data, setData] = useState<
    Array<{
      timestamp: number;
      clusterfuck: number;
      nightmareLatency: number;
      angryUsers: number;
    }>
  >([]);
  const [isRunning, setIsRunning] = useState(true);
  const [updateInterval, setUpdateInterval] = useState(1000);
  const [volatility, setVolatility] = useState(1);
  const [selectedMetrics, setSelectedMetrics] = useState({
    clusterfuck: true,
    nightmareLatency: true,
    angryUsers: true,
  });
  const [visibleRows, setVisibleRows] = useState(5);

  // For collapsible functionality - always start collapsed
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport only to determine if header should be shown
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine if content should be visible
  const shouldShowContent = isMobile ? isExpanded : true;

  // Function to add new data points
  const addDataPoint = useCallback(() => {
    setData((prevData) => {
      const newData = [...prevData];
      const timestamp = Date.now();

      // Add new data point
      newData.push(generateDataPoint(timestamp, volatility));

      // Limit data points to prevent memory issues
      if (newData.length > 50) {
        return newData.slice(newData.length - 50);
      }

      return newData;
    });
  }, [volatility]);

  // Set up interval for data updates
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isRunning) {
      intervalId = setInterval(addDataPoint, updateInterval);
    }

    // Initialize with some data
    if (data.length === 0) {
      const initialData = [];
      const now = Date.now();
      for (let i = 20; i > 0; i--) {
        initialData.push(generateDataPoint(now - i * 1000, volatility));
      }
      setData(initialData);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning, updateInterval, addDataPoint, data.length, volatility]);

  // Format timestamp for display
  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
  };

  // Get visible metrics for charts
  const getVisibleMetrics = () => {
    return Object.entries(selectedMetrics)
      .filter(([, isSelected]) => isSelected)
      .map(([key]) => key);
  };

  return (
    <div className="rounded-lg border p-2 bg-background text-foreground">
      {/* Collapse/Expand Button - Only visible on mobile */}
      {isMobile && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-2 py-3 text-left font-medium"
        >
          <span className="flex items-center gap-2 truncate">
            <span className="bg-amber-100 dark:bg-amber-800 text-amber-800 dark:text-amber-100 px-2 py-0.5 rounded-md text-xs font-semibold whitespace-nowrap">
              SHOW THE MAGIC
            </span>
            <span className="truncate whitespace-nowrap">
              React State Handling Demo
            </span>
          </span>
          {isExpanded ? (
            <ChevronUp size={20} className="flex-shrink-0" />
          ) : (
            <ChevronDown size={20} className="flex-shrink-0" />
          )}
        </button>
      )}

      {/* Content - Always visible on desktop, toggleable on mobile */}
      {shouldShowContent && (
        <div className={isMobile ? "pt-2" : ""}>
          <div className="flex flex-col lg:flex-row gap-2">
            {/* Controls panel */}
            <div className="w-full lg:w-1/4 space-y-4 p-3 border rounded-md bg-background/50">
              <div className="flex items-center justify-between">
                <Label htmlFor="running-toggle" className="font-medium">
                  Status da Festa
                </Label>
                <div className="flex items-center gap-2">
                  <Switch
                    id="running-toggle"
                    checked={isRunning}
                    onCheckedChange={setIsRunning}
                  />
                  <span className="text-xs">
                    {isRunning ? "Festa Rolando" : "Pausa para Café"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interval-slider" className="font-medium">
                  Velocidade da Dança
                </Label>
                <Slider
                  id="interval-slider"
                  min={200}
                  max={2000}
                  step={100}
                  value={[updateInterval]}
                  onValueChange={(values: number[]) =>
                    setUpdateInterval(values[0])
                  }
                />
                <div className="text-xs text-right">{updateInterval}ms</div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="volatility-slider" className="font-medium">
                  Nível de Emoção
                </Label>
                <Slider
                  id="volatility-slider"
                  min={0.5}
                  max={3}
                  step={0.1}
                  value={[volatility]}
                  onValueChange={(values: number[]) => setVolatility(values[0])}
                />
                <div className="text-xs text-right">
                  {volatility.toFixed(1)}x
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-medium">
                  Métricas Divertidas
                </Label>
                <div className="grid gap-1.5">
                  {Object.entries(chartConfig).map(([key, config]) => (
                    <div key={key} className="flex items-center gap-2">
                      <Switch
                        id={`metric-${key}`}
                        checked={
                          selectedMetrics[key as keyof typeof selectedMetrics]
                        }
                        onCheckedChange={(checked: boolean) =>
                          setSelectedMetrics((prev) => ({
                            ...prev,
                            [key]: checked,
                          }))
                        }
                      />
                      <Label htmlFor={`metric-${key}`} className="text-xs">
                        {config.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rows-visible" className="font-medium">
                Quantidade de Linhas
                </Label>
                <Input
                  id="rows-visible"
                  type="number"
                  min={1}
                  max={20}
                  value={visibleRows}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setVisibleRows(Number(e.target.value))
                  }
                  className="h-8"
                />
              </div>

              <div className="text-xs text-muted-foreground p-2 border rounded-md bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                <strong>Vamos brincar:</strong> Ative/desative métricas, ajuste
                a velocidade, aumente a emoção — isso seria uma loucura com
                HTML puro. Você precisaria de um framework legal. JavaScript
                puro seria como dançar com os pés amarrados, com manipulação manual do DOM
                e callbacks em cadeia. React faz essa
                dança ficar mais suave, mantendo o código organizado. Gerenciamento de
                estado não é só um luxo, é a coreografia da festa!
              </div>
            </div>

            {/* Charts and table area */}
            <div className="w-full lg:w-3/4 space-y-2">
              {/* Area Chart */}
              <div className="border rounded-md p-3 pb-0 h-72 w-full bg-background/50">
                <div className="text-xs font-medium mb-2 text-muted-foreground">
                  Dashboard em Tempo Real (Últimos 20 Movimentos)
                </div>
                <ChartContainer
                  config={chartConfig}
                  className="h-[calc(100%-24px)] w-full"
                >
                  <AreaChart
                    data={data.slice(-20)}
                    margin={{ top: 15, right: 15, bottom: 5, left: 5 }}
                  >
                    <defs>
                      {getVisibleMetrics().map((metric) => {
                        const color =
                          chartConfig[metric as keyof typeof chartConfig].color;
                        return (
                          <linearGradient
                            key={`gradient-${metric}`}
                            id={`gradient-${metric}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor={color}
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor={color}
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        );
                      })}
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-border/20"
                    />
                    <XAxis
                      dataKey="timestamp"
                      tickFormatter={(timestamp) =>
                        formatTimestamp(timestamp).split(":")[2]
                      }
                      tickLine={false}
                      axisLine={false}
                      dy={10}
                    />
                    <YAxis
                      tickFormatter={(value) => value.toString()}
                      tickLine={false}
                      axisLine={false}
                      width={25}
                      dx={-10}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => (
                        <ChartTooltipContent
                          active={active}
                          payload={payload}
                        />
                      )}
                    />
                    <ChartLegend
                      content={<ChartLegendContent />}
                      verticalAlign="top"
                    />
                    {getVisibleMetrics().map((metric) => (
                      <Area
                        key={metric}
                        type="monotone"
                        dataKey={metric}
                        stroke={
                          chartConfig[metric as keyof typeof chartConfig].color
                        }
                        fillOpacity={1}
                        fill={`url(#gradient-${metric})`}
                        strokeWidth={2}
                        activeDot={{ r: 4 }}
                        isAnimationActive={false}
                      />
                    ))}
                  </AreaChart>
                </ChartContainer>
              </div>

              {/* Bar Chart */}
              <div className="border rounded-md p-3 pb-0 h-72 w-full bg-background/50">
                <div className="text-xs font-medium mb-2 text-muted-foreground">
                  Métricas Recentes (Últimos 7 Passos)
                </div>
                <ChartContainer
                  config={chartConfig}
                  className="h-[calc(100%-24px)] w-full"
                >
                  <BarChart
                    data={data.slice(-7)}
                    margin={{ top: 15, right: 15, bottom: 5, left: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-border/20"
                    />
                    <XAxis
                      dataKey="timestamp"
                      tickFormatter={(timestamp) =>
                        formatTimestamp(timestamp).split(":")[2]
                      }
                      tickLine={false}
                      axisLine={false}
                      dy={10}
                    />
                    <YAxis
                      tickFormatter={(value) => value.toString()}
                      tickLine={false}
                      axisLine={false}
                      width={25}
                      dx={-10}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => (
                        <ChartTooltipContent
                          active={active}
                          payload={payload}
                        />
                      )}
                    />
                    <ChartLegend
                      content={<ChartLegendContent />}
                      verticalAlign="top"
                    />
                    {getVisibleMetrics().map((metric) => (
                      <Bar
                        key={metric}
                        dataKey={metric}
                        fill={
                          chartConfig[metric as keyof typeof chartConfig].color
                        }
                        radius={[4, 4, 0, 0]}
                        isAnimationActive={false}
                      />
                    ))}
                  </BarChart>
                </ChartContainer>
              </div>

              {/* Data Table */}
              <div className="border rounded-md p-3 w-full bg-background/50">
                <Table className="mt-0 mb-0">
                  <TableHeader className="text-xs">
                    <TableRow>
                      <TableHead className="w-[100px]">Timestamp</TableHead>
                      {getVisibleMetrics().map((metric) => (
                        <TableHead key={metric}>
                          {
                            chartConfig[metric as keyof typeof chartConfig]
                              .label
                          }
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-sm">
                    {data.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={getVisibleMetrics().length + 1}
                          className="h-12 text-center text-muted-foreground"
                        >
                          Aguardando a festa começar. Preparem-se!
                        </TableCell>
                      </TableRow>
                    ) : (
                      data
                        .slice(-visibleRows)
                        .reverse()
                        .map((point, index) => (
                          <TableRow key={index} className="py-16">
                            <TableCell className="font-mono text-xs">
                              {formatTimestamp(point.timestamp)}
                            </TableCell>
                            {getVisibleMetrics().map((metric) => (
                              <TableCell key={metric} className="tabular-nums">
                                {point[metric as keyof typeof point]}
                                {metric === "angryUsers" && " dançarinos"}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
