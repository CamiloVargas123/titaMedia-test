import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { filterPost } from "src/redux/slices/postPreview.slice";
import { AppStore } from "src/redux/store";
import { Buttons } from "src/styled-components/buttons.styled";
import { SearchForm, SearchInput } from "../styled-components/seatch.styled";

interface Search {
  filter: string
}
export default function () {
  const dispatch = useDispatch()
  const listPostPreview = useSelector((state: AppStore) => state.listPostPreview)

  const { register, handleSubmit, setValue } = useForm<Search>({ mode: "onSubmit" });

  function onSubmit({ filter }: Search) {
    dispatch(filterPost(filter))
  }

  function clearFilter() {
    dispatch(filterPost(''))
  }

  useEffect(() => {
    setValue("filter", listPostPreview.filter)
  }, [listPostPreview.filter])


  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchInput type="text" placeholder="Search" {...register("filter")} />
      {
        listPostPreview.filter && <button onClick={clearFilter}>x</button>
      }
    </SearchForm>
  )
}
