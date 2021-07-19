export class CurrentLimitingRequest {
  private readonly tasks: any[] = [];
  private count = 0;
  private readonly limit: number;
  private queryCount = 0;
  private doneCount = 0;

  constructor(limit: number = 10) {
    this.limit = limit
    console.log(this.tasks, this.count, this.limit)
  }

  scan(fn: any) {
    return this.count < this.limit ? this.run(fn) : this.hold(fn)
  }

  cancel () {
    console.log(this.queryCount, this.doneCount)
  }

  run(fn: any) {
    this.count++
    this.queryCount++
    return fn().finally(() => {
      this.count--
      this.doneCount++
      this.wakeUp()
    })
  }

  wakeUp() {
    if (this.count < this.limit && this.tasks.length) {
      const {fn, resolve, reject} = this.tasks.shift()
      this.run(fn).then(resolve).catch(reject)
    }
  }

  hold(fn: any) {
    return new Promise((resolve, reject) => {
      this.tasks.push({fn, resolve, reject})
    })
  }
}