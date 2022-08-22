import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { modifyPostPreview } from "src/redux/slices/postPreview.slice";
import { AppStore } from "src/redux/store";
import { SearchForm, SearchInput } from "../styled-components/seatch.styled";
interface Search {
  filter: string
}
export default function () {
  const dispatch = useDispatch()
  const listPostPreview = useSelector((state: AppStore) => state.listPostPreview)

  const { register, handleSubmit, setValue } = useForm<Search>({ mode: "onSubmit" });

  function onSubmit({ filter }: Search) {
    dispatch(modifyPostPreview({ ...listPostPreview, filter: filter, page: 0 }))
  }

  function clearFilter() {
    dispatch(modifyPostPreview({ ...listPostPreview, filter: '', page: 0 }))
  }

  useEffect(() => {
    setValue("filter", listPostPreview.filter)
  }, [listPostPreview.filter])


  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchInput type="text" placeholder="Search" {...register("filter")} />
      {
        listPostPreview.filter && <span onClick={clearFilter}>x</span>
      }
    </SearchForm>
  )
}
