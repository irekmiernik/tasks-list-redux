import { StyledInput } from "../../styled";
import { useReplaceQueryParameter, useQueryParameter } from "./useSearch";
import { searchParameters } from "./searchParameters";

export const Search = () => {

  const query = useQueryParameter(searchParameters);
  const replaceQueryParameter = useReplaceQueryParameter();
  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchParameters,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <StyledInput
      $search
      placeholder="Szukaj zadanie"
      value={query || ""}
      onChange={onInputChange}
    />
  )
};
