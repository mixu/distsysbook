# %chapter_number%. Further reading and appendix

If you've made it this far, thank you.

If you liked the book, follow me on [Github](https://github.com/mixu/) (or [Twitter](http://twitter.com/mikitotakada)). I love seeing that I've had some kind of positive impact. "Create more value than you capture" and all that.

I'd like to thank @logpath and @alexras for their comments - of course, any mistakes and omissions that remain are my fault!

It's worth noting that my chapter on eventual consistency is fairly Berkeley-centric; I'd like to change that. I've also skipped one prominent use case for time: consistent snapshots. There are also a couple of topics which I should expand on: namely, an explicit discussion of safety and liveness properties and a more detailed discussion of consistent hashing. However, I'm off to [Strange Loop 2013](https://thestrangeloop.com/), so whatever.

If this book had a chapter 6, it would probably be about the ways in which one can make use of and deal with large amounts of data. It seems that the most common type of "big data" computation is one in which [a large dataset is passed through a single simple program](http://en.wikipedia.org/wiki/SPMD). I'm not sure what the subsequent chapters would be (perhaps high performance computing, given that the current focus has been on feasibility), but I'll probably know in a couple of years.

## Books about distributed systems

#### Distributed Algorithms (Lynch)

This is probably the most frequently recommended book on distributed algorithms. I'd also recommend it, but with a caveat. It is very comprehensive, but written for a graduate student audience, so you'll spend a lot of time reading about synchronous systems and shared memory algorithms before getting to things that are most interesting to a practitioner.

#### Introduction to Reliable and Secure Distributed Programming (Cachin, Guerraoui & Rodrigues)

For a practitioner, this is a fun one. It's short and full of actual algorithm implementations.

#### Replication: Theory and Practice

If you're interested in replication, this book is amazing. The chapter on replication is largely based on a synthesis of the interesting parts of this book plus more recent readings.

#### Distributed Systems: An Algorithmic Approach (Ghosh)

#### Introduction to Distributed Algorithms (Tel)

#### Transactional Information Systems: Theory, Algorithms, and the Practice of Concurrency Control and Recovery (Weikum & Vossen)

This book is on traditional transactional information systems, e.g. local RDBMS's. There are two chapters on distributed transactions at the end, but the focus of the book is on transaction processing.

#### Transaction Processing: Concepts and Techniques by Gray and Reuter

A classic. I find that Weikum & Vossen is more up to date.

## Seminal papers

Each year, the [Edsger W. Dijkstra Prize in Distributed Computing](http://en.wikipedia.org/wiki/Dijkstra_Prize) is given to outstanding papers on the principles of distributed computing. Check out the link for the full list, which includes classics such as:

- "[Time, Clocks and Ordering of Events in a Distributed System](http://research.microsoft.com/users/lamport/pubs/time-clocks.pdf)" - Leslie Lamport
- "[Impossibility of Distributed Consensus With One Faulty Process](http://theory.lcs.mit.edu/tds/papers/Lynch/jacm85.pdf)" - Fisher, Lynch, Patterson
- "[Unreliable failure detectors and reliable distributed systems](http://scholar.google.com/scholar?q=Unreliable+Failure+Detectors+for+Reliable+Distributed+Systems)" - Chandra and Toueg

Microsoft Academic Search has a list of [top publications in distributed & parallel computing ordered by number of citations](http://libra.msra.cn/RankList?entitytype=1&topDomainID=2&subDomainID=16&last=0&start=1&end=100) - this may be an interesting list to skim for more classics.

Here are some additional lists of recommended papers:

- [Nancy Lynch's recommended reading list](http://courses.csail.mit.edu/6.852/08/handouts/handout3.pdf) from her course on Distributed systems.
- [NoSQL Summer paper list](http://nosqlsummer.org/papers) - a curated list of papers related to this buzzword.
- [A Quora question on seminal papers in distributed systems](http://www.quora.com/What-are-the-seminal-papers-in-distributed-systems-Why).

### Systems

- [The Google File System](http://research.google.com/archive/gfs.html) - Ghemawat, Gobioff and Leung
- [MapReduce: Simplified Data Processing on Large Clusters](http://research.google.com/archive/mapreduce.html) - Dean and Ghemawat
- [Dynamo: Amazon’s Highly Available Key-value Store](http://scholar.google.com/scholar?q=Dynamo%3A+Amazon's+Highly+Available+Key-value+Store) - DeCandia et al.
- [Bigtable: A Distributed Storage System for Structured Data](http://research.google.com/archive/bigtable.html) - Chang et al.
- [The Chubby Lock Service for Loosely-Coupled Distributed Systems](http://research.google.com/archive/chubby.html) - Burrows
- [ZooKeeper: Wait-free coordination for Internet-scale systems](http://research.yahoo.com/pub/3280)
