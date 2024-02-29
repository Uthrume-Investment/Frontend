import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function InvestmentPlans() {
  return (
    <>
    <h2 className='text-blue-400 text-5xl text-center'>Investment Plans</h2>
    <Tabs>
        <TabList>
        <Tab>Trending</Tab>
        <Tab>Housing</Tab>
        <Tab>Land</Tab>
        </TabList>

        <TabPanel>
            <div className='flex justify-evenly p-3'>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Trending 1</div>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Trending 2</div>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Trending 3</div>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Trending 4</div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className='flex justify-evenly p-3'>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Housing 1</div>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Housing 2</div>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Housing 3</div>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Housing 4</div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className='flex justify-evenly p-3'>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Land 1</div>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Land 2</div>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Land 3</div>
                <div className='shadow-xl shadow-blue-50 rounded-md p-3 h-32 w-full'>Land 4</div>
            </div>
        </TabPanel>
  </Tabs>
    </>
  )
}
