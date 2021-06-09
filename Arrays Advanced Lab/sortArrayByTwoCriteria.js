function sortArray(input) {
    const twoCriteriaSort = (current, next) =>
        current.length - next.length || current.localeCompare(next);
    input.sort(twoCriteriaSort);
    console.log(input.join('\n'));
}
sortArray(["alpha", "beta", "gamma"]);