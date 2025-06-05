class FibonacciGenerator {

    // Generate the nth Fibonacci number
    public generateNthFibonacci(n: number): number {
        if (n < 0) {
            throw new Error('Invalid input. Fibonacci sequence is not defined for negative indices.');
        }

        let a = 0, b = 1;
        if (n === 0) return a;
        if (n === 1) return b;

        for (let i = 2; i <= n; i++) {
            const temp = a + b;
            a = b;
            b = temp;
        }

        return b;
    }

    // Generate the Fibonacci sequence up to the nth number
    public generateFibonacciSequence(n: number): number[] {
        if (n < 0) {
            throw new Error('Invalid input. Fibonacci sequence is not defined for negative indices.');
        }

        const sequence: number[] = [];
        let a = 0, b = 1;
        sequence.push(a);
        if (n === 0) return sequence;
        sequence.push(b);
        if (n === 1) return sequence;

        for (let i = 2; i <= n; i++) {
            const temp = a + b;
            sequence.push(temp);
            a = b;
            b = temp;
        }

        return sequence;
    }
}

export default FibonacciGenerator;
