import React from 'react'

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <div className="w-20 h-20 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
    </div>
  )
}