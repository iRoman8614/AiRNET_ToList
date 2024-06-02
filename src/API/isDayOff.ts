import {FetchMonthData} from '../types/index'

export const fetchMonthDataApi: FetchMonthData = async (year, month) => {
    const response = await fetch(`https://isdayoff.ru/api/getdata?year=${year}&month=${month + 1}&delimeter=%0A`);
    if (!response.ok) {
        throw new Error('Failed to fetch the days off data');
    }
    const data = await response.text();
    return data.trim().split('\n').map(Number);
};
