import React from 'react'
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";
export default function ParentErrorBoundary() {
    return (
        <div>
            <ErrorBoundary>
                <Hero name="Batman"/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero name="Superman"/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero name="Joker"/>
            </ErrorBoundary>
            
            
            
            
        </div>
    )
}
