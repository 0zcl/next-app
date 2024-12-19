/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2024-05-08 17:12:20
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-05-13 16:36:43
 * @Description: 入口页面
 */
'use client'
import HotContainer from '@/components/HotContainer'; // 热榜卡片
import { useEffect } from 'react';
import { track } from '@vercel/analytics'
// import { sendGAEvent } from '@next/third-parties/google'

export default function Home() {

  useEffect(() => {
    console.log('useEffect')
    track('pageView')
    // sendGAEvent('event', )
  }, [])

  return (
    <div
      className="grid px-4 md:px-12 lg:px-20 gap-5 py-5"
      style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(20rem,1fr))' }}
    >
      <HotContainer />
    </div>
  );
}
