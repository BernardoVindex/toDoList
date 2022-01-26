import React from "react";

    function TodoList(props) {
        const renderFunc = props.children || props.rende
        
        return (
            <section className="TodoList-container">
                {props.error && props.onError()}

                {props.loading && props.onLoading()}
                
                {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}                

                {(props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)} 

                {(!props.loading && props.error) && props.searchedTodos.map(renderFunc)}
                
                <ul>
                    {props.children}
                </ul>
            </section>
        );
    }
    

export { TodoList };