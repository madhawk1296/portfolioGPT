'use client'

import { Tables } from "@/types/tables";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);
export default function MessagesChart({ calls }: { calls: Tables<"api_calls">[] }) {
    const dailyCounts: Record<string, number> = {};
    const labels = [];
    const displayDays = [];
    const lastDate = new Date();
    const firstDate = new Date();
    firstDate.setDate(lastDate.getDate() - 30);

    for (let d = firstDate; d <= lastDate; d.setDate(d.getDate() + 1)) {
        const dayKey = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;  // Unique key
        const dayDisplay = d.getDate().toString();  // Just the day for display
    
        labels.push(dayKey);
        displayDays.push(dayDisplay);
        dailyCounts[dayKey] = 0;
    }
    
    calls.forEach(call => {
        const date = new Date(call.created_at);
        const day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        if (dailyCounts[day] !== undefined) {
            dailyCounts[day] += 1;
        }
    });
    
    const dataPoints = labels.map(label => dailyCounts[label]);

    const chartData = {
        labels: displayDays,
        datasets: [
          {
            label: 'Messages',
            data: dataPoints,
            backgroundColor: '#2563eb',
            borderColor: '#2563eb',
            borderWidth: 1,
          },
        ]
    };

    return (
        <div className="w-full h-[150px]">
            <Bar data={chartData} options={{
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 40,
                        grid: {
                            display: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }} />
        </div>
    )
}