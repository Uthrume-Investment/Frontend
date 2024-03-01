import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function InvestmentPlans() {
  return (
    <div className='p-5'>
      <h2 className='my-3 text-3xl text-blue-400'>Investment Plan</h2>
      <Tabs defaultIndex={0}>
        
        <TabList className="flex mb-4">
          <Tab className="px-4 py-2 mr-2 text-blue-500 bg-white rounded-md cursor-pointer" selectedClassName="selectedTab">Trending</Tab>
          <Tab className="px-4 py-2 mr-2 text-blue-500 bg-white rounded-md cursor-pointer" selectedClassName="selectedTab">Housing</Tab>
          <Tab className="px-4 py-2 mr-2 text-blue-500 bg-white rounded-md cursor-pointer" selectedClassName="selectedTab">Land</Tab>
        </TabList>

        <TabPanel>
          <div className='flex p-3 justify-evenly'>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Trending 1</div>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Trending 2</div>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Trending 3</div>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Trending 4</div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className='flex p-3 justify-evenly'>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Housing 1</div>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Housing 2</div>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Housing 3</div>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Housing 4</div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className='flex p-3 justify-evenly'>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Land 1</div>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Land 2</div>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Land 3</div>
            <div className='w-full h-32 p-3 rounded-md shadow-xl shadow-blue-50'>Land 4</div>
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  )
}
