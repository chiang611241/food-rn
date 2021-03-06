import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList results={filterResultByPrice('$')} title='Cost Effective' />
        <ResultList results={filterResultByPrice('$$')} title='Bit Pricier' />
        <ResultList results={filterResultByPrice('$$$')} title='Big Spender' />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
