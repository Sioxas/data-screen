/**
 * Created by sioxa on 2017/3/2 0002.
 */
export const area_stack = [
  {country: 'Asia', year: '1750', value: 502},
  {country: 'Asia', year: '1800', value: 635},
  {country: 'Asia', year: '1850', value: 809},
  {country: 'Asia', year: '1900', value: 947},
  {country: 'Asia', year: '1950', value: 1402},
  {country: 'Asia', year: '1999', value: 3634},
  {country: 'Asia', year: '2050', value: 5268},

  {country: 'Africa', year: '1750', value: 106},
  {country: 'Africa', year: '1800', value: 107},
  {country: 'Africa', year: '1850', value: 111},
  {country: 'Africa', year: '1900', value: 133},
  {country: 'Africa', year: '1950', value: 221},
  {country: 'Africa', year: '1999', value: 767},
  {country: 'Africa', year: '2050', value: 1766},

  {country: 'Europe', year: '1750', value: 163},
  {country: 'Europe', year: '1800', value: 203},
  {country: 'Europe', year: '1850', value: 276},
  {country: 'Europe', year: '1900', value: 408},
  {country: 'Europe', year: '1950', value: 547},
  {country: 'Europe', year: '1999', value: 729},
  {country: 'Europe', year: '2050', value: 628},

  {country: 'Oceania', year: '1750', value: 200},
  {country: 'Oceania', year: '1800', value: 200},
  {country: 'Oceania', year: '1850', value: 200},
  {country: 'Oceania', year: '1900', value: 300},
  {country: 'Oceania', year: '1950', value: 230},
  {country: 'Oceania', year: '1999', value: 300},
  {country: 'Oceania', year: '2050', value: 460},
];

export const asia_data =[
  {country: 'Asia', year: '1750', value: 502},
  {country: 'Asia', year: '1800', value: 635},
  {country: 'Asia', year: '1850', value: 809},
  {country: 'Asia', year: '1900', value: 947},
  {country: 'Asia', year: '1950', value: 1402},
  {country: 'Asia', year: '1999', value: 3634},
  {country: 'Asia', year: '2050', value: 5268}
];

export const years=['1750','1800','1850','1900','1950','1999','2050']
export const asia_value_1=[502,635,809,947,1402,3634,5268]
export const asia_value_2=[635,809,947,1402,3634,5268,502]

export function get_data_array(data){
  return data.map(a=>a.value);
}

export function assign_value(arr,data){
  let t=data;
  for(let i=0;i<years.length;++i)
    t[i].value=arr[years[i]]
  return t;
}

export function scroll_array(arr){
  let a=arr
  a.push(a.shift())
  return a
}

export function assemble_obj(arr){
  let o = {}
  for(let i=0;i<years.length;++i){
    o[years[i]]=arr[i]
  }
  return o
}
