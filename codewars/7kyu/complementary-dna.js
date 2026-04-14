function dnaStrand(dna) {
  const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
  return dna.replace(/[ATCG]/g, (match) => pairs[match]);
}
